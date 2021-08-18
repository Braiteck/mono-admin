<template>
    <preloader v-if="preloader" />

    <section id="auth" v-else>
        <auth-header />

        <form class="form" :class="{ processing: processing }" @submit.prevent="onSubmit">
            <div class="line">
                <base-form-label :labelText="$t('message.form_label_email')" />

                <div class="field">
                    <input type="text" class="input" maxlength="64" v-focus
                        v-model.trim="formData.email"
                        @input="$v.formData.email.$touch"
                        :placeholder="$t('message.form_placeholder_email')"
                        :class="{ error: $v.formData.email.$error }">

                    <base-form-error v-if="!$v.formData.email.required && $v.formData.email.$dirty"
                        :errorMessage="$t('message.valid_error_required')" />

                    <base-form-error v-if="!$v.formData.email.maxLength && $v.formData.email.$dirty"
                        :errorMessage="$t('message.valid_error_maxLength', { count: $v.formData.email.$params.maxLength.max })" />

                    <base-form-error v-if="!$v.formData.email.email && $v.formData.email.$dirty"
                        :errorMessage="$t('message.valid_error_email')" />
                </div>
            </div>


            <div class="line">
                <base-form-label :labelText="$t('message.form_label_password')" />

                <div class="field">
                    <input type="password" class="input" maxlength="32"
                        v-model.trim="formData.password"
                        @input="$v.formData.password.$touch"
                        :placeholder="$t('message.form_placeholder_password')"
                        :class="{ error: $v.formData.password.$error }">

                    <base-form-error v-if="!$v.formData.password.required && $v.formData.password.$dirty"
                        :errorMessage="$t('message.valid_error_required')" />

                    <base-form-error v-if="!$v.formData.password.minLength && $v.formData.password.$dirty"
                        :errorMessage="$t('message.valid_error_minLength', { count: $v.formData.password.$params.minLength.max })" />

                    <base-form-error v-if="!$v.formData.password.maxLength && $v.formData.password.$dirty"
                        :errorMessage="$t('message.valid_error_maxLength', { count: $v.formData.password.$params.maxLength.max })" />
                </div>
            </div>


            <div class="submit">
                <base-button classes="primary submit_btn"
                    :buttonText="$t('message.btn_enter')"
                    :loading="processing" />
            </div>
        </form>
    </section>
</template>


<script>
// Импорт компонентов
import AuthHeader from "@/components/auth/AuthHeader.vue"

// Импорт валидаторов
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'


export default {
    name: 'Login',

    // Компоненты
    components: {
        AuthHeader, // Верхняя часть авторизации
    },

    // Мета данные
    metaInfo: function () {
        return {
            title: this.$i18n.t('message.page_title_login')
        }
    },

    // Локальные данные
    data () {
        return {
            preloader: true,
            processing: false,
            formData: {
                email: '',
                password: '',
            },
        }
    },

    mounted() {
        // Отключение прелоадера
        this.preloader = false
    },

    // Правила валидации формы
    validations: {
        formData: {
            email: {
                required,
                email,
                maxLength: maxLength(64),
            },
            password: {
                required,
                minLength: minLength(8),
                maxLength: maxLength(32),
            },
        }
    },

    methods: {
        // Отправка формы
        onSubmit() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                // Блокировка формы
                this.processing = true

                // Отправка данных на сервер
                this.$store.dispatch('user/login', this.formData)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            } else {
                // Показ сообщения об ошибкиs
                this.$toast.clear()
                this.$toast.error(this.$t('message.notification_error_required'))
            }
        }
    }
}
</script>
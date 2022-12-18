<template>
    <form
        id="contact-form"
        action=""
        class="grid gap-x-6 gap-y-4 lg:grid-cols-3 lg:w-2/3"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
    >
        <div class="lg:col-span-1 form-control">
            <label class="label" for="name">Your Name</label>
            <input
                id="contact-name"
                class="input input-bordered"
                v-model="formData.name"
                type="text"
                name="name"
                placeholder="Name"
            >
        </div>
        <div class="lg:col-span-2 form-control">
            <label class="label" for="name">Your Email</label>
            <input
                id="contact-email"
                class="input input-bordered"
                v-model="formData.email"
                type="email"
                name="email"
                placeholder="Email"
            >
        </div>
        <div class="lg:col-span-3 form-control">
            <label class="label" for="message">Message</label>
            <textarea
                id="contact-message"
                class="py-4 h-36 input input-bordered"
                v-model="formData.message"
                name="message"
                placeholder="Message"
                cols="30"
                rows="10"
            />
        </div>
        <button class="w-full mt-2 xl:col-span-1 btn btn-primary">Send Message</button>
    </form>
</template>

<script lang="ts" setup>
    const formData = ref({
        'form-name': 'contact',
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = async () => {
        const res = await useFetch('/', {
            method: 'POST',
            body: formData.value,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        resetForm()

        return res;
    }

    // reset formData
    const resetForm = () => {
        formData.value = {
            'form-name': 'contact',
            name: '',
            email: '',
            message: '',
        };
    }
</script>
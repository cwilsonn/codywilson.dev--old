<template>
    <form
        id="contact-form"
        class="grid gap-x-6 gap-y-4 lg:grid-cols-3 lg:w-2/3"
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/submission-success"
    >
        <input type="hidden" name="form-name" value="contact-form" />
        <div class="hidden">
            <label for="bot-field">Don't fill this out if you're human:</label>
            <input name="bot-field" />
        </div>
        <div class="lg:col-span-1 form-control">
            <label class="label" for="name">Your Name</label>
            <input
                id="contact-name"
                class="input input-bordered"
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
                name="message"
                placeholder="Message"
                cols="30"
                rows="10"
            />
        </div>
        <button type="submit" class="w-full mt-2 xl:col-span-1 btn btn-primary">Send Message</button>
    </form>
</template>

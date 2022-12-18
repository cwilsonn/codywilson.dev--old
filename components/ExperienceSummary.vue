<template>
    <img
        :src="imgUrl"
        :alt="company"
        class="w-auto h-20"
    >
    <div class="flex flex-col items-start">
        <a
            :href="webUrl"
            target="_blank"
            class="text-lg font-bold link link-hover"
        >
            {{ company }}
        </a>
        <span class="text-sm">
            {{ jobTitle }}
        </span>
        <span class="text-xs italic light">
            {{ computedDateRange }}
        </span>
    </div>
    <p
        v-if="description"
        class="max-w-prose"
    >
        {{ description }}
    </p>
</template>

<script lang="ts" setup>
    import { format } from 'date-fns';

    const props = defineProps<{
        company: string;
        jobTitle: string;
        imgUrl: string;
        webUrl: string;
        startDate: string;
        endDate?: string;
        isCurrent?: boolean;
        description: string;
    }>();

    const computedDateRange = computed(() => {
        const dateStart = format(new Date(props.startDate), 'MMM y')
        const dateEnd = props.isCurrent
            ? 'Present'
            : props.endDate
                ? format(new Date(props.endDate), 'MMM y')
                : 'Unknown';

        return [dateStart, dateEnd].join(' - ');
    });
</script>
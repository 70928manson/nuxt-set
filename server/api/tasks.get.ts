export default defineEventHandler(async (event) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay

    return sendError(event, createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'An error occurred while fetching tasks.',
    }))

    return [{
        id: 1,
        title: 'Learn Nuxt',
        done: false,
    }
    , {
        id: 2,
        title: 'Learn more Nuxt',
        done: false,
    }]
})
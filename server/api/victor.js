export default defineEventHandler(async (event) => {

    //handle params
    const { name } = getQuery(event);

    // handle post data
    const { age } = await readBody(event);

    return {
        message: `hello, ${ name }, You are ${age}`
    }
})
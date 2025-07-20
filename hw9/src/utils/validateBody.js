const validateBody = async (schema, body) => {
    try {
    await schema.validate(body, {
        abortEarly: false,
        strict: true,
    });
    return true;
    } catch (error) {
    error.status = 400;
    throw error;
    }
};

export default validateBody;

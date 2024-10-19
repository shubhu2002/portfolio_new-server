export const dummyController = async (req, res) => {
    try {
        const response = "this is a dummy GET request";
        res.status(200).json({ success: true, message: response });
    }
    catch (error) {
        res.status(200).json({ success: false, error: error });
    }
};

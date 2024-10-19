import type { Request, Response } from "express"

export const dummyController = async (req: Request, res: Response) => {
    try {
        const response = "this is a dummy GET request"

        res.status(200).json({ success: true, message: response })
    } catch (error: any) {
        res.status(200).json({ success: false, error: error })
    }
}

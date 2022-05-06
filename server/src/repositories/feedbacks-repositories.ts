export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface Feedbackrepositories {
    create: (data: FeedbackCreateData) => Promise<void>;
}
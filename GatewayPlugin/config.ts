// A list of "passes" offered by Civic to verify or gate access to a DAO.
export const availablePasses = [
    // Default
    {
        name: 'Uniqueness',
        value: 'uniqobk8oGh4XBLMqM68K8M2zNu3CdYX7q5go7whQiv',
        description: 'A biometric proof of personhood, preventing Sybil attacks while retaining privacy'
    },
    {
        name: 'ID Verification',
        value: 'bni1ewus6aMxTxBi5SAfzEmmXLf8KcVFRmTfproJuKw',
        description: 'A KYC process for your DAO, allowing users to prove their identity by presenting a government-issued ID'
    },
    {
        name: 'Bot Resistance',
        value: 'ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6',
        description: 'A simple CAPTCHA to prevent bots from spamming your DAO'
    },
    {
        name: 'Other',
        value: '',
        description: 'Set up your own custom verification (contact Civic.com for options)'
    },
] as const;

// Infer the types from the available passes, giving type safety on the `other` and `default` pass types
type ArrayElement<
    ArrayType extends readonly unknown[]
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
export type CivicPass = ArrayElement<typeof availablePasses>;

export const defaultPass: CivicPass = availablePasses[0]
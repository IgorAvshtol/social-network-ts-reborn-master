

export const required = (value: string) => {
    if (value) return undefined

    return "Field is required"
}

export const maxLenghtCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `Max lenght is ${maxLength} symbols`
    return undefined
}
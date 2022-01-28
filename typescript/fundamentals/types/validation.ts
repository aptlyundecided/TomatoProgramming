export interface ActionResponseDTO {
    message: string;
    success: boolean;
};

export const InitActionResponseDTO = (): ActionResponseDTO => {
    return {
        message: '',
        success: false,
    };
};

export const ActionResponseValidation = (n: ActionResponseDTO): boolean => {
    if (typeof n.message !== 'string') {
        return false;
    }
    if (typeof n.success !== 'boolean') {
        return false;
    }
    return true;
}

// Example of required / not-required
export interface IHavePropertiesThatCanBeNull {
    requiredOne: boolean;
    requiredTwo: string;
    notRequiredOne?: boolean;
    notRequiredTwo?: string;
}

export const InitIHavePropertiesThatCanBeNull = (): IHavePropertiesThatCanBeNull => {
    return {
        requiredOne: false,
        requiredTwo: '',
        notRequiredOne: null,
        notRequiredTwo: null
    }
}

export const IHavePropertiesThatCanBeNullValidation = (n: IHavePropertiesThatCanBeNull): boolean => {
    if (typeof n.requiredOne !== 'boolean') { 
        return false;
    }
    if (typeof n.requiredTwo !== 'string') {
        return false;
    }
    if (n.notRequiredOne !== null && typeof n.notRequiredOne !== 'boolean') {
        return false;
    }
    if (n.notRequiredTwo !== null && typeof n.notRequiredTwo !== 'string') {
        return false;
    }
    return true;
}
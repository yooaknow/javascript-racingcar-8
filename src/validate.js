const ERROR ={
    NAME_FORMAT: "[ERROR] 잘못된 이름 형식입니다.",
    NAME_LENGTH: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
    TRY_COUNT: "[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다."
}

export const validateCarNames = (names) => {
    if (!Array.isArray(names) || names.length == 0) {
        throw new Error (ERROR.NAME_FORMAT);
    }


    for (const raw of names) {
        let name = raw;
        if (name === undefined || name === null) {
            name = "";
        }
        name = name.trim();  


        if (name.length===0) {
            throw new Error(ERROR.NAME_FORMAT);
        }

        if (name.length > 5) {
            throw new Error(ERROR.NAME_LENGTH);
        }
        
    }

    return true;
};

export const validateTryCount = (count) => {
    if (!Number.isInteger(count)||count <1){
        throw new Error(ERROR.TRY_COUNT);
    }
}
export const convertStatisticTo4Digits = number => {
    number = parseInt(number);
    if (number > 1000000000){
        return `${Math.floor(number / 1000000000)}B`;
    }else if(number > 1000000){
        return `${Math.floor(number/1000000)}M`;
    }
    else if(number > 1000){
        return `${Math.floor(number/1000)}K`;
    }else{
        return `${number}`;
    }
}

export const cleanRegex = text => {
    if(typeof text === "string"){
        text = text.replaceAll('&quot;', '"');
        text = text.replaceAll("&#39;", "'");
    }
    return text;
}
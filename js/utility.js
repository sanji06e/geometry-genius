function getElementValue(elementId) {
    const getElement = document.getElementById(elementId);
    if (getElement.tagName == 'INPUT') {
        let getInputValue = getElement.value;
        getInputValue = parseFloat(getInputValue);
        return getInputValue;
    }
    else {
        let getTextValue = getElement.innerText;
        getTextValue = parseFloat(getTextValue);
        return getTextValue;
    }
}
function setArea(areaId, value) {
    const areaName = document.getElementById(areaId);
    areaName.innerText = value;
}
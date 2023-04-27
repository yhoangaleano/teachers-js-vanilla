export function createEmptyRow(colspan, message) {
    const rowEmpty = document.createElement('tr');
    const colEmpty = document.createElement('td');
    colEmpty.setAttribute('colspan', colspan);
    colEmpty.textContent = message;
    colEmpty.classList.add('text-center');
    rowEmpty.appendChild(colEmpty);
    return rowEmpty;
}


export function createActionButton({ buttonClass, buttonClassIdentifier, title, icon, dataId }) {
    const actionButton = document.createElement('button');
    actionButton.classList.add('btn', buttonClass, buttonClassIdentifier, 'm-1');
    actionButton.dataset.id = dataId;
    actionButton.setAttribute('title', title);
    const actionIcon = document.createElement('em');
    actionIcon.classList.add('fa', icon);
    actionIcon.dataset.id = dataId;
    actionButton.appendChild(actionIcon);
    return actionButton;
}
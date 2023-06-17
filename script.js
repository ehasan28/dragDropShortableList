const shortableList = document.querySelector(".sortable_list");
const item = document.querySelectorAll(".item");


item.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => {
            item.classList.add("dragging")
        }, 0);
    });
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    });
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = shortableList.querySelector(".dragging");
    const siblings = [...shortableList.querySelectorAll(".item:not(.dragging")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    })

    shortableList.insertBefore(draggingItem, nextSibling);
};

shortableList.addEventListener("dragover", initSortableList);
shortableList.addEventListener("dragenter", e => e.preventDefault());
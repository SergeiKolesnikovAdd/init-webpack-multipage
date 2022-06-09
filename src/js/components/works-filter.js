export const worksFilter = callback => {
  const _filterButtons = document.querySelectorAll('[data-button-filter]');
  const _works = document.querySelectorAll('[data-work-filter]');

  _filterButtons.forEach(item => {
    const rule = item.dataset.buttonFilter;

    item.addEventListener('click', () => {
      setActive(item, _filterButtons);
      filterWorks(_works, rule, callback);
    });
  });
};

function setActive(activeItem, _filterButtons) {
  _filterButtons.forEach(item => {
    item.classList.remove('button_active');
    activeItem.classList.add('button_active');
  });
}

function filterWorks(works, rule, callback) {
  if (rule !== '*') {
    works.forEach(item => {
      const ruleValue = item.dataset.workFilter;

      item.style.display = 'none';

      if (ruleValue === rule) {
        item.style.display = 'flex';
      }
    });
  } else {
    works.forEach(item => {
      item.style.display = 'flex';
    });
  }

  callback && callback();
}

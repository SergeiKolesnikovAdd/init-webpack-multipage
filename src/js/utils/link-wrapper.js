function linkWrapper() {
    const _linkWrappers = document.querySelectorAll('.link-wrapper');
  
    _linkWrappers.forEach(item => {
      item.addEventListener('mousemove', () => {
        item.classList.add('link-wrapper_hover');
      });
  
      item.addEventListener('mouseout', () => {
        item.classList.remove('link-wrapper_hover');
  
        setTimeout(() => {
          if (!item.classList.contains('link-wrapper_hover')) {
            item.classList.add('link-wrapper_active');
  
            setTimeout(() => {
              item.classList.remove('link-wrapper_active');
            }, 300);
          }
        }, 300);
      });
    });
  }
  
  export { linkWrapper };
  
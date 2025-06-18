import btnStyles from 'styles/css/ClickBtnIcon.module.css';

export const iconClassChange = (e: React.MouseEvent, bool: boolean) => {
    e.preventDefault();
    const target = e.currentTarget.querySelector("img") as HTMLImageElement;
    
    if(bool) {
        target.classList.add(btnStyles.active);
    } else {
        target.classList.remove(btnStyles.active);
    }
}
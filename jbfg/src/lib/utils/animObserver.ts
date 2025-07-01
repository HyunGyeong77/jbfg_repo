export const animObserver = (ref: HTMLElement, className: string, threshold: number) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    ref.classList.add(className);
                }
            })
        }, {
            threshold: threshold
        })

        observer.observe(ref);

    return (() => {
        observer.unobserve(ref);
    })
}

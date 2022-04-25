const LoadReposHook = {
    mounted() {
        const selector = "#" + this.el.id
        this.observer = new IntersectionObserver(entries => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                this.pushEventTo(selector, "load-repos-hook", {})
            }
        })
        this.observer.observe(this.el)
    }
}
export default LoadReposHook
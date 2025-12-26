// Scroll animation
const items = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });
items.forEach(i => observer.observe(i));

// Filter
const buttons = document.querySelectorAll('.filters button');
const posts = document.querySelectorAll('.post');

buttons.forEach(btn => {
    btn.onclick = () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        posts.forEach(post => {
            post.style.display =
                filter === 'all' || post.classList.contains(filter)
                    ? 'block' : 'none';
        });
    }
});

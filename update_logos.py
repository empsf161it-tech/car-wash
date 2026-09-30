import os
import glob

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements
    content = content.replace(
        '<a href="index.html" class="navbar-logo">Car Wash</a>',
        '<a href="index.html" class="navbar-logo"><img src="assets/images/logo.jpg" alt="Car Wash Logo" class="brand-icon"> Car Wash</a>'
    )
    content = content.replace(
        '<span class="navbar-logo">Car Wash</span>',
        '<span class="navbar-logo"><img src="assets/images/logo.jpg" alt="Car Wash Logo" class="brand-icon"> Car Wash</span>'
    )
    content = content.replace(
        '<h3 class="footer-logo">Car Wash</h3>',
        '<h3 class="footer-logo"><img src="assets/images/logo.jpg" alt="Car Wash Logo" class="brand-icon"> Car Wash</h3>'
    )
    content = content.replace(
        '<h1 class="login-logo">Car Wash</h1>',
        '<h1 class="login-logo"><img src="assets/images/logo.jpg" alt="Car Wash Logo" class="brand-icon"> Car Wash</h1>'
    )
    content = content.replace(
        '<h1 class="register-logo">Car Wash</h1>',
        '<h1 class="register-logo"><img src="assets/images/logo.jpg" alt="Car Wash Logo" class="brand-icon"> Car Wash</h1>'
    )
    content = content.replace(
        '<h1 class="coming-soon-logo">Car Wash</h1>',
        '<h1 class="coming-soon-logo"><img src="assets/images/logo.jpg" alt="Car Wash Logo" class="brand-icon"> Car Wash</h1>'
    )

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print("Logos updated in all HTML files.")

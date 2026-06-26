#!/usr/bin/env bash

# ============================================================
# Create directory structure for ANAConsultmar static website
# Run from the project root (e.g., ./create-project.sh)
# ============================================================

# Create top-level directories
mkdir -p css
mkdir -p js
mkdir -p assets/images/hero
mkdir -p assets/images/services
mkdir -p assets/fonts/outfit
mkdir -p components

# Create empty placeholder files (optional – remove if you have them already)
touch css/main.css
touch css/light-theme.css
touch css/dark-theme.css       # ready for future use
touch js/main.js
touch js/components.js

# Create empty HTML pages for all sections
touch index.html
touch about.html
touch services.html
touch tbs.html
touch riken-keiki.html
touch training.html
touch contact.html

# Create component snippets (they will be populated later)
touch components/header.html
touch components/footer.html

# Create a basic .gitignore and README
cat > .gitignore << 'EOF'
.DS_Store
node_modules/
EOF

cat > README.md << 'EOF'
# ANAConsultmar
Static website for marine consulting services.
EOF

echo "✅ Project structure created successfully!"
echo "Now you can move your existing files into their respective folders."

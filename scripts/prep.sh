#!/bin/bash
# =================================================
#  download-all.sh
#  Builds the full project structure and downloads
#  all assets locally.
# =================================================

set -e

echo "==> Creating folder structure…"

# ---------- HTML pages ----------
mkdir -p about
mkdir -p contact
mkdir -p partners
mkdir -p riken-keiki
mkdir -p services
mkdir -p tbs
mkdir -p training

# ---------- Assets ----------
mkdir -p assets/font-awesome/css
mkdir -p assets/font-awesome/webfonts
mkdir -p assets/images/about
mkdir -p assets/images/bento
mkdir -p assets/images/certificates
mkdir -p assets/images/contact
mkdir -p assets/images/hero
mkdir -p assets/images/partners
mkdir -p assets/images/riken-keiki
mkdir -p assets/images/tbs
mkdir -p assets/images/training

# ---------- Components & CSS/JS (already exist, but ensure they exist) ----------
mkdir -p components
mkdir -p css
mkdir -p js
mkdir -p scripts

echo "==> Downloading Font Awesome CSS…"
wget -O assets/font-awesome/css/all.min.css \
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"

echo "==> Downloading Font Awesome webfonts…"
wget -P assets/font-awesome/webfonts \
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-brands-400.woff2" \
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-regular-400.woff2" \
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-solid-900.woff2"

echo "==> Patching Font Awesome CSS to use local webfonts…"
sed -i "s|https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/|../webfonts/|g" \
  assets/font-awesome/css/all.min.css

echo "==> Downloading hero images…"
wget -O assets/images/hero/slide-bulk-cabinet.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Bulk-cabinet-lover-part.jpg"
wget -O assets/images/hero/slide-calibration.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Calibration-and-maintenace-kit-1.jpg"
wget -O assets/images/hero/slide-services.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/services.jpg"
wget -O assets/images/hero/slide-classroom.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Class-room-compressed.jpg"

echo "==> Downloading about images…"
wget -O assets/images/about/team-meeting.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/At-the-table.jpg"
wget -O assets/images/about/logo.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Logo-white.jpg"

echo "==> Downloading bento image…"
wget -O assets/images/bento/ship-vent.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Ship-in-Vent-with-me-1.jpg"

echo "==> Downloading certificate images…"
wget -O assets/images/certificates/technical-training.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/Technical-Training-MB-Oslo-15012019-791x1024.jpg"
wget -O assets/images/certificates/project-management.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/Project-management-744x1024.jpg"
wget -O assets/images/certificates/marine-assessor.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/Marine-assessor-744x1024.jpg"
wget -O assets/images/certificates/leadership.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/Leadership-744x1024.jpg"
wget -O assets/images/certificates/internal-auditor-ism.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/Internal-auditor-ISM-744x1024.jpg"
wget -O assets/images/certificates/instructor.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/Instructor-cert-744x1024.jpg"
wget -O assets/images/certificates/financial-management.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/Financial-Management-Certificate-706x1024.jpg"
wget -O assets/images/certificates/dnv-lead-auditor.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/DNV-lead-auditor-744x1024.jpg"
wget -O assets/images/certificates/dnv-iso-endorsed.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/DNV-ISO-andorsed-744x1024.jpg"
wget -O assets/images/certificates/corrosion-protection.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2019/05/Corrosion-protec-744x1024.jpg"

echo "==> Downloading contact image…"
wget -O assets/images/contact/office.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/office-1.jpg"

echo "==> Downloading favicon…"
wget -O assets/images/favicon.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/cropped-Logo-white-32x32.jpg"

echo "==> Downloading partner logos…"
wget -O assets/images/partners/km-logo.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/KM-logo.jpg"
wget -O assets/images/partners/lapa-logo.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Lapa-logo.jpg"

echo "==> Downloading Riken Keiki logo…"
wget -O assets/images/riken-keiki/logo.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Riken-Keiki-logo.jpg"

echo "==> Downloading TBS images…"
wget -O assets/images/tbs/cabinet-closed.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Cabinet-closed-2.jpg"
wget -O assets/images/tbs/cabinet-complete.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Cabinet-complete-4.jpg"
wget -O assets/images/tbs/mb-logo.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/MB-logo.jpg"

echo "==> Downloading training image…"
wget -O assets/images/training/bridge-simulator.jpg \
  "https://anaconsultmar.com/wp-content/uploads/2018/10/Bridge-simulator-300x225.jpg"

echo ""
echo "All done! The project structure and assets are ready."
echo "Now add your HTML, CSS, and JS files to complete the site."

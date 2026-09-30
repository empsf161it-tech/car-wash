$htmlFiles = Get-ChildItem -Path . -Filter *.html

$backToTopHtml = @"
  <!-- Back to Top Button -->
  <button id="backToTop" class="back-to-top" aria-label="Back to top">
    <i class="ph ph-arrow-up"></i>
  </button>
</body>
"@

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Check if back to top is already there to avoid duplicates
    if ($content -notmatch 'id="backToTop"') {
        $content = $content -replace '</body>', $backToTopHtml
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
    }
}
Write-Output "Back to top button added to all HTML files."

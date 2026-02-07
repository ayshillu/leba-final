import os
import re

def update_related_products():
    directory = r"c:\Users\aysha\OneDrive\Documents\final leba"
    files = [f for f in os.listdir(directory) if f.endswith(".html")]
    
    for filename in files:
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if "Related Products" in content:
            # First, clean up any previous failed attempts (double class)
            content = content.replace('class="panel reveal-panel" class="related-products-section"', 'class="panel related-products-section"')
            
            # Use regex for more robustness to catch the section tag
            # We look for a section that is followed by "Related Products" shortly after
            # Pattern: <section[^>]*>(?:(?!</section>).)*Related Products
            
            # Simple targeted replacements for known patterns
            patterns = [
                (r'<section class="panel reveal-panel" style="background: white; padding-bottom: 20px; padding-top: 58px;">', r'<section class="panel related-products-section">'),
                (r'<section class="panel reveal-panel" style="background: var\(--bg-primary\);">', r'<section class="panel related-products-section">'),
                 (r'<section class="panel reveal-panel" style="background:white; padding-bottom:20px; padding-top:58px;">', r'<section class="panel related-products-section">')
            ]
            
            new_content = content
            for old, new in patterns:
                new_content = re.sub(old, new, new_content)
            
            # Clean up double classes just in case
            new_content = re.sub(r'class="([^"]*)"\s+class="([^"]*)"', r'class="\1 \2"', new_content)
            
            # Remove reveal-panel from related-products-section
            new_content = new_content.replace('reveal-panel related-products-section', 'related-products-section')
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filename}")

if __name__ == "__main__":
    update_related_products()

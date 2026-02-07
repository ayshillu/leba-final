import os

def fix_html():
    directory = r"c:\Users\aysha\OneDrive\Documents\final leba"
    files = [f for f in os.listdir(directory) if f.endswith(".html")]
    
    for filename in files:
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = content.replace('class="panel reveal-panel" class="related-products-section"', 'class="panel related-products-section"')
        new_content = new_content.replace('class="panel reveal-panel" style="background: var(--bg-primary);"', 'class="panel related-products-section"')
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed {filename}")

if __name__ == "__main__":
    fix_html()

import os

def print_tree(startpath, exclude_dirs):
    for root, dirs, files in os.walk(startpath):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        level = root.replace(startpath, '').count(os.sep)
        indent = '│   ' * (level - 1) + '├── ' if level > 0 else ''
        if level > 0:
            print(f"{indent}{os.path.basename(root)}/")
        else:
            print(f"{os.path.basename(startpath)}/")
            
        subindent = '│   ' * level + '├── '
        for f in files:
            print(f"{subindent}{f}")

print_tree('.', ['.git', 'node_modules', '.next'])

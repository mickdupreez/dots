import os
import re

from powerline.bindings.vim import buffer_name


NERD_TREE_RE = re.compile(b'NERD_tree_\\d+')


def nerdtree(matcher_info):
    name = buffer_name(matcher_info)
    return name and NERD_TREE_RE.match(os.path.basename(name))

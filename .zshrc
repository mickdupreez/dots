export ZSH="$HOME/.oh-my-zsh"
autoload -U colors && colors
PS1="%B%{$fg[red]%}[%{$fg[yellow]%}%n%{$fg[green]%}@%{$fg[blue]%}%M %{$fg[magenta]%}%~%{$fg[red]%}]%{$reset_color%}$%b "
[ -f "$HOME/.config/shortcutrc" ] && source "$HOME/.config/shortcutrc"
[ -f "$HOME/.config/aliasrc" ] && source "$HOME/.config/aliasrc"
echo -ne '\e[5 q'
preexec() { echo -ne '\e[5 q' ;}
ENABLE_CORRECTION="true"
HIST_STAMPS="mm/dd/yyyy"
plugins=(git
         sudo
	 zsh-autosuggestions
         zsh-syntax-highlighting)
autoload -U compinit && compinit
source $ZSH/oh-my-zsh.sh
autoload -U +X bashcompinit && bashcompinit
complete -o nospace -C /usr/bin/vault vault
bindkey '\e[1~' beginning-of-line
bindkey '\e[4~' end-of-line
alias open=xdg-open
fetch=$(fetch)
logo="\e[H\e[2J
          \e[1;32m.
         \e[1;32m/#\\      \e[1;33m          _      \e[1;31m _ _
        \e[1;32m/###\\     \e[1;33m         | |     \e[1;31m| (_)
       \e[1;32m/p^###\\    \e[1;33m _ __ ___| |__   \e[1;31m| |_ _ __  _   ___  __
      \e[1;32m/##P^q##\\   \e[1;33m| '__/ __| '_ \\  \e[1;31m| | | '_ \\| | | \\ \\/ /
     \e[1;32m/##(   )##\\  \e[1;33m| | | (__| | | | \e[1;31m| | | | | | |_| |>  <
    \e[1;32m/###P   q#,^\\ \e[1;33m|_|  \\___|_| |_| \e[1;31m|_|_|_| |_|\\__,_/_/\\_\\ \e[0;37mTM
   \e[1;32m/P^         ^q\\"

echo ${logo}
echo ${fetch}
echo "\e[0m================================================================================"
echo "                           Welcome \e[34m$USER\e[0m"
echo ""
alias gogit='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
alias vim='nvim'
alias svim='sudo nvim'


# Adds `~/.local/bin/` and all subdirectories to $PATH
export PATH="$PATH:$(du "$HOME/.local/bin/" | cut -f2 | tr '\n' ':' | sed 's/:*$//')"
export EDITOR="nvim"
export TERMINAL="st"
export MAIL="neomutt"
export BROWSER="google-chrome-stable"
export READER="zathura"
export FILE="ViFM"
export SUDO_ASKPASS="$HOME/.local/bin/tools/dmenupass"
export NOTMUCH_CONFIG="$HOME/.config/notmuch-config"
export GTK2_RC_FILES="$HOME/.config/gtk-2.0/gtkrc-2.0"
export SCRATCHPAD="termite"
# less/man colors
export LESS=-R
export LESS_TERMCAP_mb="$(printf '%b' '1;31m')"
export LESS_TERMCAP_md="$(printf '%b' '1;36m')"
export LESS_TERMCAP_me="$(printf '%b' '0m')"
export LESS_TERMCAP_so="$(printf '%b' '01;44;33m')"
export LESS_TERMCAP_se="$(printf '%b' '0m')"
export LESS_TERMCAP_us="$(printf '%b' '1;32m')"
export LESS_TERMCAP_ue="$(printf '%b' '0m')"

export PKG_CONFIG_PATH="$HOME/gnu/lib/pkgconfig:$HOME/local/share/pkgconfig:/usr/lib64/pkgconfig:$PKG_CONFIG_PATH"

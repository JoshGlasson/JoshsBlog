---
slug: '2021-01-15-android_terminal'
title: 'Terminal on Android.'
headline: 'Using the Terminal on my Phone'
image: "./images/icons/termux.jpg"
sortdate: "2021-01-15"
originaldate: "2021-01-15"
tags: ['Software Development']
---

In a <a href="https://joshlearningto.code.blog/2019/12/06/making-notes/" target="_blank">previous post</a> I wrote about how I used Termux on my phone to sync my notes from a GitHub repo onto my phone. I wanted to go into a bit more detail on how I set up Termux and how I use it now.

Termux is a really great app which allows you to use the Linux Terminal which exists on your Android phone. Android is basically built on top of Linux, which is the reason you can do this. You do not need to have rooted your phone, unless wanted greater control and access over the command line. I have not rooted my phone, so everything below is achievable without doing so.

# Setting Up Termux

After downloading the app, the very first thing I did is install <a href="https://www.nano-editor.org/" target="_blank"><strong>nano</strong></a> using the below command:

<div id="codeSnippet">

```bash
pkg install nano
```
</div>

Termux has *vi* already, but I really hate vi and vim, so I don't even attempt to use them! We are going to be editing some files and writing some code, so pick an editor you like.

To access files on your phones internal storage, you need to run `termux-setup-storage`.

The next thing I did was install oh-my-zsh to make the terminal on my phone be as similar as possible to the one on my laptop. I wrote a blog about OMZ previously as well, which you can <a href="https://joshlearningto.code.blog/2020/01/21/zsh-plugins/" target="_blank">checkout here</a>. I found the easiest way to install it was to use <a href="https://github.com/4679/oh-my-termux" target="_blank">oh-my-termux</a>, by running the below command:

<div id="codeSnippet">

```bash
bash -c "$(curl -fsSL https://git.io/oh-my-termux)"

# set zsh as default shell
chsh -s zsh
```
</div>

Installing this way also changes the theme to Solarized Dark, and I prefer the default dark theme, so I changed it back. To do this, you can delete the file at `~/.termux/colors.properties`.

<div id="codeSnippet">

```bash
rm -f ~/.termux/colors.properties
```
</div>

Next I setup some command line shortcuts. I spoke about this in the previous post about <a href="https://joshlearningto.code.blog/2020/01/21/zsh-plugins/" target="_blank">OMZ</a>, but I will give a walkthrough here too. Navigate to `~/.oh-my-zsh/custom`, and there is a file called `example.zsh`. You can either delete or rename this file, I renamed it to `custom.zsh`. Inside the file, I added my shortcuts, which you can see below:

<div id="codeSnippet">

```bash
alias zsh-profile="cd ~/.oh-my-zsh/custom && nano custom.zsh && cd -"
alias ll="ls -lhaG"
alias refresh-source="cd ~/ && source .zshrc && cd -"
alias home="cd ~/"
alias goback="cd -"

# I will get on to the pi stuff later
alias pi-connect="ssh pi@$PI_IP_ADDRESS"
```
</div>

Navigate back to the home directory and refresh the source with the below:

<div id="codeSnippet">

```bash
cd ~/
source .zshrc
```
</div>

You can see in my shortucts that I have assigned the above to `refresh-source`, so now I can use that command instead of having to type the above everytime.

Next I installed a couple of plugins for OMZ. There's two I use; <a href="https://github.com/zsh-users/zsh-autosuggestions" target="_blank">zsh-autosuggestions</a> and <a href="https://github.com/zsh-users/zsh-syntax-highlighting" target="_blank">zsh-syntax-highlighting</a>. To install them, first we need to clone the git repos. Use the below commands to do this:

<div id="codeSnippet">

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
</div>

Once they have been cloned, open up the `.zshrc` file at the home directory in your editor. Scroll down to the *plugins* part and add the name of the plugins like below:

<div id="codeSnippet">

```bash
plugins=(
	git
	zsh-autosuggestions
	zsh-syntax-highlighting
)
```
</div>

Now either refresh the source manually again, or if you have setup the shortcut, run `refresh-source`. Now both plugins should be active.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/01/termux-zsh_syntax_highlighting.jpg" style="width:50%;" alt="Example of Zsh Syntax Highlighting"/>
    <figcaption>Example of the Zsh Syntax Highlighting Plugin in Action</figcaption>
  </figure>
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/01/termux-zsh_autosuggestions.jpg" style="width:50%;" alt="Example of Zsh Autosuggestions"/>
    <figcaption>Example of the Zsh Autosuggestions Plugin in Action</figcaption></a>
  </figure>
</div>

The last setup thing I did, was increase the size and the amount of keys on the <a href="https://wiki.termux.com/wiki/Touch_Keyboard" target="_blank">touch keyboard</a> that comes with the app. Navigate to the home directory and open up `.termux/termux.properties`. In here you can add *extra-keys* to change how the touch keyboard works. ***BE CAREFUL*** here though as if you mess it up the keyboard will just disappear, in that case refer to the touch keyboard page linked above to see the other shortcuts using the Volume Up and Down buttons.

I added the below to mine:

<div id="codeSnippet">

```properties
extra-keys = [ \
  ['ESC','CTRL','ALT','HOME','END'], \
  [], \
  ['TAB','|','/','UP','-'], \
  [], \
  ['FN','=','LEFT','DOWN','RIGHT'] \
]
```
</div>

Which makes it look like this:

<div id="imageDiv">
    <figure>
        <img src="https://joshlearningtocode.files.wordpress.com/2021/01/termux-touch_keyboard.png" alt="Termux Touch Keyboard">
        <figcaption>Customised Touch Keyboard</figcaption>
    </figure>
</div>

# Raspberry Pi

The reason I set all this up again, is because I wanted to have an easy way to copy files over to my Raspberry Pi 4. Previously I was having to plug my phone into the Pi via USB, which was not easy as it's not in an easy to access place. I was always able to SSH to my Pi and connect to it that way, which made me think there must be a way to transfer files wirelessly too. I did some Google-fu and found <a href="https://en.wikipedia.org/wiki/Secure_copy_protocol" target="_blank">SCP (Secure Copy Protocol)</a>. I could use `scp` to copy files over, using a command like the below:

<div id="codeSnippet">

```bash
scp test.txt pi@$PI_IP_ADDRESS:/home/pi/Desktop
```
</div>

This would copy the file `test.txt` on to the Desktop of my Raspberry Pi.

To make this easier, I wrote a script:

<div id="codeSnippet">

```bash
set -e

piip="pi@$PI_IP_ADDRESS:"

if [ "$2" = "movies" ]; then
    path=$piip"/disks/Elements/Media/Movies"
elif [ "$2" = "tv" ]; then 
    path=$piip"/disks/Elements/Media/TV"
elif [ "$2" = "desktop" ]; then 
    path=$piip"/home/pi/Desktop"
else 
    echo "Copying to "$piip$2
    path=$piip$2
fi

scp "$1" "$path"
```
</div>

I used `chmod` to allow my script to run. Now I could run `./copyToPi test.txt desktop` to copy the file to my desktop. 

<div id="imageDiv">
    <figure>
        <img src="https://joshlearningtocode.files.wordpress.com/2021/01/termux-scp.jpeg" alt="SCP File to Pi">
        <figcaption>Using <code>scp</code> to copy file to Raspberry Pi</figcaption>
    </figure>
</div>

This worked, but after a but more Google-fu, I found that scp is not the best way to do this, and that <a href="https://en.wikipedia.org/wiki/Secure_file_transfer_program" target="_blank">SFTP (Secure File Transfer Protocol)</a> is the more modern way to do it. So I wrote another script to do this:

<div id="codeSnippet">

```bash
set -e

piip="pi@$PI_IP_ADDRESS:"

# This replaces any spaces with "\ "
file=`echo "$1" | sed 's/\ /\\\ /g'`

if [ "$2" = "movies" ]; then
    path=$piip"/disks/Elements/Media/Movies"
elif [ "$2" = "tv" ]; then 
    path=$piip"/disks/Elements/Media/TV"
elif [ "$2" = "desktop" ]; then 
    path=$piip"/home/pi/Desktop"
else 
    echo "Copying to "$piip$2
    path=$piip$2
fi

echo put $file | sftp $path 
```
</div>

Which also worked just fine:

<div id="imageDiv">
    <figure>
        <img src="https://joshlearningtocode.files.wordpress.com/2021/01/termux-sftp.png" alt="SFTP File to Pi">
        <figcaption>Using <code>sftp</code> to copy file to Raspberry Pi</figcaption>
    </figure>
</div>

Now I can wirelessly transfer files from my phone to my laptop. Eventually I would like to setup a DNS and do some port forwarding so that I can SSH to my Pi outside of my home, but thats for another day!
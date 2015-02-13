# which distro ?

A module to let you know which distro you are specifically running own.


#### ubuntu

it s based on http://man.cx/lsb_release


#### fedora

it s based on http://stackoverflow.com/questions/540603/how-can-i-find-the-version-of-the-fedora-i-use


#### others

feel free to help this project to detect other distro such debian, gentoo, arch-linux and all many others.

# Install

```
npm i -g which-distro
```

# Usage

```
  Usage: which-distro [options]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -v, --verbose       More verbose
    -p, --pretty-print  Pretty printing
```

# Example

```
which-distro -p
{
    "distro": "fedora",
    "name": "Fedora release 21 (Twenty One)",
    "release": "21"
}
```


```
which-distro
{"distro":"fedora","name":"Fedora release 21 (Twenty One)","release":"21"}
```
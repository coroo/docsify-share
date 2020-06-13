# Getting Started

## Installation

1. Configure docsify-share:

    ```html
    <script>
        window.$docsify = {
            share: {
                reddit: true,
                linkedin: true,
                facebook: true,
                twitter: true,
                whatsapp: true,
                telegram: true,
            }
        };
    </script>
    ```

2. Insert script into docsify document:

    ```html
    <script src="//unpkg.com/docsify-share/build/index.min.js"></script>
    ```

## Usage

It will automatically show you a share button link.

# Supported Social Networks

- <a href='#/?id=facebook' style='text-decoration:none'>
<i class="fa fa-facebook animated"></i> | Facebook</a>
- <a href='#/?id=reddit' style='text-decoration:none'>
<i class="fa fa-reddit animated"></i> | Reddit</a>
- <a href='#/?id=twitter' style='text-decoration:none'>
<i class="fa fa-twitter animated"></i> | Twitter</a>
- <a href='#/?id=linkedin' style='text-decoration:none'>
<i class="fa fa-linkedin animated"></i> | LinkedIn</a>
- <a href='#/?id=whatsapp' style='text-decoration:none'>
<i class="fa fa-whatsapp animated"></i> | Whatsapp</a>
- <a href='#/?id=telegram' style='text-decoration:none'>
<i class="fa fa-telegram animated"></i> | Telegram</a>

## Facebook

<span target="_blank" class="fab github-fab indigo" tooltip="Facebook"><i class="fa fa-facebook animated"></i></span> 

### Default Usage {docsify-ignore}

```
facebook: true
```

### Parameter Usage {docsify-ignore}

Available Parameters : `url`.

```
facebook: {
    url: "https://coroo.github.io/docsify-share"
},
```

## Reddit

<span target="_blank" class="fab github-fab red" tooltip="Reddit"><i class="fa fa-reddit animated"></i></a>

### Default Usage {docsify-ignore}

```
reddit: true
```

### Parameter Usage {docsify-ignore}

Available Parameters : `url`, `title`.

```
reddit: {
    url: "https://coroo.github.io/docsify-share",
    title: "my custom title",
},
```

## Twitter

<span target="_blank" class="fab github-fab light-blue" tooltip="Twitter"><i class="fa fa-twitter animated"></i></a>

### Default Usage {docsify-ignore}

```
twitter: true
```

### Parameter Usage {docsify-ignore}

Available Parameters : `url`, `title`.

```
twitter: {
    url: "https://coroo.github.io/docsify-share",
    title: "my custom title",
},
```

## LinkedIn

<span target="_blank" class="fab github-fab blue-linkedin" tooltip="Linked In"><i class="fa fa-linkedin animated"></i></a>

### Default Usage {docsify-ignore}

```
linkedin: true
```

### Parameter Usage {docsify-ignore}

Available Parameters : `url`.

```
linkedin: {
    url: "https://coroo.github.io/docsify-share"
},
```

## Whatsapp

<span target="_blank" class="fab github-fab green" tooltip="Whatsapp"><i class="fa fa-whatsapp animated"></i></a>

### Default Usage {docsify-ignore}

```
whatsapp: true
```

### Parameter Usage {docsify-ignore}

Available Parameters : `url`, `title`.

```
whatsapp: {
    url: "https://coroo.github.io/docsify-share",
    title: "my custom title",
},
```

## Telegram

<span target="_blank" class="fab github-fab black" tooltip="Telegram"><i class="fa fa-telegram animated"></i></a>

### Default Usage {docsify-ignore}

```
telegram: true
```

### Parameter Usage {docsify-ignore}

Available Parameters : `url`, `title`.

```
telegram: {
    url: "https://coroo.github.io/docsify-share",
    title: "my custom title",
},
```

---

# License

The MIT License (MIT). Please see [License File](https://github.com/coroo/docsify-chart/blob/master/LICENSE)

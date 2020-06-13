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
    url: "google.com"
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
    url: "google.com",
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
    url: "google.com",
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
    url: "google.com"
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
    url: "google.com",
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
    url: "google.com",
    title: "my custom title",
},
```

---

# License

The MIT License (MIT). Please see [License File](https://github.com/coroo/docsify-chart/blob/master/LICENSE)

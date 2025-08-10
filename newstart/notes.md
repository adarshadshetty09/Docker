### ✅ To forcefully remove all the images, including multi-tagged ones:

```
docker rmi $(docker images -q)
```


```
docker rmi -f $(docker images -q)
```

### Remove **dangling/untagged** or **unused** images only:

```
docker image prune -a
```

### To list **only the image IDs**, use the following command:

```
docker images -q
```

### Remove **all** containers using:

```
docker rm $(docker ps -aq)
```

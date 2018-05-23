# Experimenting with settings and technologies

Grunt  
Less  
Angular  

Comparing PR from command line vs Git online interface

## [Testing PR Requests from command line](https://github.com/jd/git-pull-request)
### Options / help

git pull-request -h  
```
usage: git-pull-request [-h] [--download DOWNLOAD] [--debug]  
                        [--target-remote TARGET_REMOTE]  
                        [--target-branch TARGET_BRANCH] [--title TITLE]  
                        [--message MESSAGE] [--no-rebase] [--force-editor]  
                        [--no-comment-on-update] [--comment COMMENT]  
                        [--no-tag-previous-revision]  
  
Send GitHub pull-request.  
  
optional arguments:  
  -h, --help            show this help message and exit  
  --download DOWNLOAD, -d DOWNLOAD  
                        Checkout a pull request  
  --debug               Enabled debugging  
  --target-remote TARGET_REMOTE  
                        Remote to send a pull-request to. Default is auto-  
                        detected from .git/config.  
  --target-branch TARGET_BRANCH  
                        Branch to send a pull-request to. Default is auto-  
                        detected from .git/config.  
  --title TITLE         Title of the pull request.  
  --message MESSAGE, -m MESSAGE  
                        Message of the pull request.  
  --no-rebase, -R       Don't rebase branch before pushing.  
  --force-editor        Force editor to run to edit pull-request message.  
  --no-comment-on-update  
                        Do not post a comment stating the pull-request has  
                        been updated.  
  --comment COMMENT, -C COMMENT  
                        Comment to publish when updating the pull-request  
  --no-tag-previous-revision  
                        Preserve older revision when pushing  
```



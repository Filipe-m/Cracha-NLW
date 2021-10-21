const LinksSocialMedia = {
  github: 'Filipe-m',
  youtube: 'channel/UCQlBmWAk1ZKNsDmSodxmHSQ',
  facebook: 'filipe.filipemoreiracoelho',
  instagram: 'filipe.m_',
  twitter: 'OxygenPotasium'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

  }
}
changeSocialMediaLinks()

function getGitHubProfilesInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url).then(response => response.json()).then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userAvatar.src = data.avatar_url
    userGitHub.href = data.url
    userLogin.textContent = data.login

  })
}
getGitHubProfilesInfos()

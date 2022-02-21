// Buscar links salvos
export async function getLinkSave(key) {
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || []

  return linksSaves
}

// Salvar um link no local storage:
export async function saveLink(key, newLink) {
  let linksStored = await getLinkSave(key)

  // Se já tiver um link salvo com um algum ID, não deixar duplicar:
  const hasLink = linksStored.some(link => link.id === newLink.id)

  if (hasLink) {
    console.log('ESSE LINK JÁ EXISTE NA LISTA!')
    return
  }

  // Adicionar o novo link na lista:
  linksStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored))
  console.log('LINK SALVO COM SUCESSO')
}

// Deletar um link no local storage:
export function deleteLink(links, id) {
  let myLinks = links.filter(item => {
    return item.id !== id
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  console.log('LINK DELETADO COM SUCESSO!')

  return myLinks
}

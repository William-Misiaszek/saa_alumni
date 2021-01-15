import Page from './page'
import ComponentNotFound from './component_not_found'

const ComponentList = {
  page: Page
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components

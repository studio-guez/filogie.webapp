export type CategoryType = 'diffusion' | 'operation' | 'prospectif'

export const useActiveCategory = () => {
  const activeCategory = useState<CategoryType | null>('activeCategory', () => null)

  const setActiveCategory = (category: CategoryType | null) => {
    activeCategory.value = category
  }

  return {
    activeCategory,
    setActiveCategory
  }
}

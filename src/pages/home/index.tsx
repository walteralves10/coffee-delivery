import { useMemo, useState } from 'react'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  Container,
  Title,
  Information,
  Introduction,
  ShoppingSpan,
  TimerSpan,
  PackageSpan,
  CoffeeSpan,
  GroupInformation,
  CoffeeSection,
  Category,
} from './styles'
import { Card } from './components/card'
import { coffees } from '../../../data.json'
import coffeeStyle from '../../assets/coffeeStyle.svg'

export function Home() {
  const [tagSelected, setTagSelected] = useState<string>('')
  const filterTags = coffees.map((coffee) => coffee.tags)
  const tags = useMemo(() => {
    const values: string[] = []
    filterTags.forEach((tag) =>
      tag.forEach((value) => {
        values.push(value)
      }),
    )

    return [...new Set(values.map((v) => v))]
  }, [filterTags])

  const handleToggleTag = (tag: string) => {
    if (tag === tagSelected) {
      return setTagSelected('')
    }
    setTagSelected(tag)
  }

  return (
    <Container>
      <Introduction>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Information>
            <GroupInformation>
              <ShoppingSpan>
                <ShoppingCart weight="fill" />
                Compra simples e segura
              </ShoppingSpan>

              <TimerSpan>
                <Timer weight="fill" />
                Entrega rápida e rastreada
              </TimerSpan>
            </GroupInformation>

            <GroupInformation>
              <PackageSpan>
                <Package weight="fill" />
                Embalagem mantém o café intacto
              </PackageSpan>

              <CoffeeSpan>
                <Coffee weight="fill" />O café chega fresquinho até você
              </CoffeeSpan>
            </GroupInformation>
          </Information>
        </Title>

        <img src={coffeeStyle} alt="" />
      </Introduction>
      <CoffeeSection>
        <div>
          <h2>Nossos cafés</h2>
          <Category>
            {tags.map((tag) => (
              <button
                data-tag={tag === tagSelected}
                onClick={() => handleToggleTag(tag)}
                key={tag}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </Category>
        </div>
        <div>
          {coffees
            .filter((value) => {
              return tagSelected !== ''
                ? value.tags.includes(tagSelected)
                : value
            })
            .map((coffee) => (
              <Card key={coffee.id} coffee={coffee} />
            ))}
        </div>
      </CoffeeSection>
    </Container>
  )
}

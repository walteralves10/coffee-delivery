import { useCallback, useContext, useEffect, useState } from 'react'
import {
  Actions,
  BaseButton,
  CartButton,
  Container,
  LocationButton,
} from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
const APIkey = '6d0e711d72d74daeb2b0bfd2a5cdfdba'
const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }

export function Header() {
  const { cart } = useContext(CartContext)
  const [location, setLocation] = useState('')

  const getLocationInfo = (latitude: number, longitude: number) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          setLocation(
            `${data.results[0].components.city}, ${data.results[0].components.state}`,
          )
        } else {
          console.log('Reverse geolocation request failed.')
        }
      })
      .catch((error) => console.error(error))
  }

  const success = useCallback((pos: GeolocationPosition) => {
    const crd = pos.coords

    getLocationInfo(crd.latitude, crd.longitude)
  }, [])

  const errors = (err: GeolocationPositionError) => {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          // If granted then you can directly call your function here
          navigator.geolocation.getCurrentPosition(success, errors, options)
        } else if (result.state === 'prompt') {
          // If prompt then the user will be asked to give permission
          navigator.geolocation.getCurrentPosition(success, errors, options)
        } else if (result.state === 'denied') {
          // If denied then you have to show instructions to enable location } });
        } else {
          console.log('Geolocation is not supported by this browser.')
        }
      })
    }
  }, [success])

  return (
    <Container>
      <BaseButton to="/">
        <img src={logo} alt="LogoTipo Coffee Delivery" />
      </BaseButton>

      <Actions>
        <LocationButton to="#">
          <MapPin size={22} weight="fill" />
          {/* Porto Alegre, RS */}
          {location}
        </LocationButton>
        <CartButton to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 && <span>{cart.length}</span>}
        </CartButton>
      </Actions>
    </Container>
  )
}

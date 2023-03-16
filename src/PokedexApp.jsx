/* eslint-disable */ 
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from './theme';

/* eslint-disable */ 
export const PokedexApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </>
  )
}

import { useLayoutEffect, useEffect } from 'react';
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
export default useIsomorphicLayoutEffect;



// referensi
//https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
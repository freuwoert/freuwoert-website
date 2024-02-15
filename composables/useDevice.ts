export const useDevice = () => {
    const isTouchDevice = window?.matchMedia('(pointer: coarse)')?.matches
    const isPointerDevice = window?.matchMedia('(pointer: fine)')?.matches
    const width = window?.innerWidth || 0
    const height = window?.innerHeight || 0

    return {
        isTouchDevice,
        isPointerDevice,
        width,
        height,
    }
}

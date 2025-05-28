export const getRadialStyle = (item: MenuItem): Record<string, string> => {
    return {
      top: item.top !== undefined ? `${item.top}px` : "",
      left: item.left !== undefined ? `${item.left}px` : "",
      right: item.right !== undefined ? `${item.right}px` : "",
      bottom: item.bottom !== undefined ? `${item.bottom}px` : "",
    };
  };
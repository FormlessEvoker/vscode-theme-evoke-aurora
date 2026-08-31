#include <stdbool.h>
#include <stdio.h>

#define AURORA_MAX 64

typedef struct {
  const char *shade;
  unsigned int intensity;
  bool visible;
} Aurora;

static const char *describe(const Aurora *sky) {
  return sky->visible && sky->intensity > 50U ? "bright aurora" : "night sky";
}

int main(void) {
  Aurora sky = {.shade = "mint", .intensity = 72U, .visible = true};
  printf("%s: %s (%u/%d)\n", describe(&sky), sky.shade, sky.intensity, AURORA_MAX);
  return 0;
}

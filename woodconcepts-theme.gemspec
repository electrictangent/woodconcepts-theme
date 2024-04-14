# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "woodconcepts-theme"
  spec.version       = "1.0.4"
  spec.authors       = ["Ethan Wellington"]
  spec.email         = ["ethan@pukekocode.nz"]

  spec.summary       = "Custom theme for Wood Concepts website"
  spec.homepage      = "https://no-remote-origin-yet"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end

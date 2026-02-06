# Testing Guide for MovieTrack

This guide covers the testing setup and practices for the MovieTrack application.

## 🧪 Testing Stack

- **Jest** - Testing framework
- **React Testing Library** - React component testing
- **@testing-library/jest-dom** - Custom Jest matchers
- **@testing-library/user-event** - User interaction simulation

## 📁 Test Structure

```
__tests__/
├── components/          # Component tests
│   ├── navigation.test.tsx
│   └── movie-skeleton.test.tsx
└── lib/                 # Utility function tests
    ├── tmdb.test.ts
    └── watchlist.test.ts
```

## 🚀 Running Tests

### Run all tests
```bash
pnpm test
```

### Run tests in watch mode
```bash
pnpm test:watch
```

### Run tests with coverage
```bash
pnpm test:coverage
```

### Run tests in CI environment
```bash
pnpm test:ci
```

## 📊 Coverage Thresholds

Current thresholds set in `jest.config.ts`:
- **Branches**: 50%
- **Functions**: 50%
- **Lines**: 50%
- **Statements**: 50%

## ✅ Writing Tests

### Component Test Example

```typescript
import { render, screen } from '@testing-library/react'
import { YourComponent } from '@/components/your-component'

describe('YourComponent', () => {
  it('should render correctly', () => {
    render(<YourComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

### Utility Function Test Example

```typescript
import { yourFunction } from '@/lib/your-utility'

describe('yourFunction', () => {
  it('should return expected value', () => {
    const result = yourFunction('input')
    expect(result).toBe('expected output')
  })
})
```

## 🎯 Test Coverage Areas

### Current Test Coverage

1. **API Service (`lib/tmdb.ts`)**
   - ✅ Image URL generation
   - ✅ Genre name mapping
   - ✅ Movie search
   - ✅ Movie details fetching
   - ✅ Popular movies fetching
   - ✅ Error handling

2. **Watchlist Utilities (`lib/watchlist.ts`)**
   - ✅ Get watchlist
   - ✅ Set watchlist
   - ✅ Add to watchlist
   - ✅ Remove from watchlist
   - ✅ Check if in watchlist
   - ✅ Toggle watchlist
   - ✅ Clear watchlist
   - ✅ Data persistence

3. **Navigation Component**
   - ✅ Conditional rendering
   - ✅ Auth state handling
   - ✅ Active state highlighting
   - ✅ User-specific features

4. **Skeleton Components**
   - ✅ Loading state rendering
   - ✅ Grid layout structure
   - ✅ Dynamic count handling

## 🔧 Testing Best Practices

### 1. Test Isolation
- Each test should be independent
- Use `beforeEach` and `afterEach` for setup/cleanup
- Mock external dependencies

### 2. Mock External Dependencies
```typescript
// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}))

// Mock API calls
global.fetch = jest.fn()
```

### 3. Test User Interactions
```typescript
import userEvent from '@testing-library/user-event'

it('should handle button click', async () => {
  const user = userEvent.setup()
  render(<Button onClick={mockFn}>Click me</Button>)
  
  await user.click(screen.getByText('Click me'))
  expect(mockFn).toHaveBeenCalled()
})
```

### 4. Async Testing
```typescript
it('should load data', async () => {
  render(<AsyncComponent />)
  
  // Wait for element to appear
  const element = await screen.findByText('Loaded Data')
  expect(element).toBeInTheDocument()
})
```

## 🛠️ Debugging Tests

### Run specific test file
```bash
pnpm test navigation.test.tsx
```

### Run tests matching pattern
```bash
pnpm test -- --testNamePattern="should render"
```

### Debug mode
```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

### View detailed output
```bash
pnpm test -- --verbose
```

## 📝 Adding New Tests

When adding new features, follow this checklist:

1. **Create test file** matching the source file structure
   - `components/foo.tsx` → `__tests__/components/foo.test.tsx`
   - `lib/bar.ts` → `__tests__/lib/bar.test.ts`

2. **Write test cases** covering:
   - Happy path (expected behavior)
   - Edge cases (empty inputs, null values)
   - Error scenarios
   - User interactions

3. **Run tests locally** before committing
   ```bash
   pnpm test:coverage
   ```

4. **Ensure coverage** meets thresholds

## 🚫 What NOT to Test

- Third-party library internals
- Next.js framework code
- Radix UI component internals
- Complex CSS/styling logic (use visual regression tools instead)

## 🔄 Continuous Integration

Tests run automatically in CI/CD pipeline:
```yaml
# Example GitHub Actions
- name: Run tests
  run: pnpm test:ci
```

## 📚 Additional Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
# Clear Jest cache
pnpm test -- --clearCache
```

### "window is not defined" errors
- Ensure tests use `testEnvironment: 'jsdom'` in jest.config.ts
- Mock window objects in jest.setup.ts

### Timeout errors
```typescript
// Increase timeout for slow tests
it('slow test', async () => {
  // test code
}, 10000) // 10 second timeout
```

## ✨ Next Steps

Consider adding:
- [ ] E2E tests with Playwright or Cypress
- [ ] Visual regression tests with Percy or Chromatic
- [ ] Performance tests with Lighthouse CI
- [ ] Accessibility tests with jest-axe
